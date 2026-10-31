"""Assemble reviewed Test 1 content and compressed course sources.

Usage: python scripts/assemble5083.py --extracted DIR --content DIR --uploads DIR
The source PPTX files stay outside the public repository. Output is deterministic.
"""
import argparse
import base64
import gzip
import hashlib
import html
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SCOPE = {
    1: [12,13,14,16,17,18,19,20,29,30,34,37,42,43,45,46,60,61,63,64,65,74,75,76,80,88,93,95,96,100],
    2: [11,17,20,25,27,42,43,44,52,56,83,84,85,106,125,158],
    3: [7,9,16,20,23,24,26,34,37,43,45,48,54,68],
    4: [8,12,15,21,26,28,103,104],
}
NOTICE = ('范围依据 Test 1 Scope.docx，页码按原 PPT 物理页序。英文正文和讲者备注保留原意；中英学习解读、校核说明及模拟题为辅助学习内容。'
          '模拟题不是教师原题，练习时间和分值由本站设置，不代表正式考试。图像 OCR 未逐字校对，应以原图为准。')
CORRECTIONS = [
    {'chapter':1,'slides':[19], 'text':'学校类型这个例子有歧义：学校机构类别可作名义变量，教育阶段则可以排序。判断测量尺度时先说明变量的实际含义。'},
    {'chapter':1,'slides':[30], 'text':'备注中的 HER 按上下文应为 EHR（electronic health record）。原文仍予保留。'},
    {'chapter':2,'slides':[42,43,44,52], 'text':'42–44 页采用 excess kurtosis（正态基准 0），52 页代码未减 3，采用原始四阶矩尺度（正态总体基准 3；有限样本估计另有差异）。峰度须先辨认定义，不能用峰度判断标准差。'},
    {'chapter':3,'slides':[16,20,23,24,26,34,37,43,45,48,54,68], 'text':'这些页的备注重复了 BMI t 检验表述。学习解读依照各页实际题目、图像及输出校核，原始备注单独保留。'},
    {'chapter':3,'slides':[45,68], 'text':'p ≥ α 时应写 fail to reject H₀（未能拒绝原假设），不能写证明无关联；显著差异也不能单独验证诊断或证明因果。'},
    {'chapter':4,'slides':[8], 'text':'factor 明确指定类别及参照组。二元变量以 0/1 等数字编码并带截距时也可拟合等价组间差异，不能笼统断言所有数值编码均使模型无效。'},
    {'chapter':4,'slides':[12,15,21,26,28], 'text':'这些页重复了输出文件夹备注。实际学习重点结合本页模型、输出和诊断图解释。'},
    {'chapter':4,'slides':[26,28], 'text':'残差图和 Scale-Location 图提供诊断证据，不能证明假设必然成立。应写 broadly consistent with / no clear evidence against，并检查弯曲或扩散趋势。'},
]

def write_json(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')

def esc(value):
    return html.escape(str(value or ''), quote=True)

def block(value, cls=''):
    return f'<div class="text {cls}">{esc(value)}</div>'

def page(title, body):
    return ('<!doctype html><html lang="zh-Hans"><head><meta charset="utf-8">'
      '<meta name="viewport" content="width=device-width,initial-scale=1">'
      f'<title>{esc(title)}</title><style>'
      'body{font:16px/1.75 system-ui,-apple-system,"Microsoft YaHei",sans-serif;color:#183047;max-width:1060px;margin:24px auto;padding:24px}'
      'h1{font-size:30px;line-height:1.3}h2{margin-top:36px;border-bottom:2px solid #cadbdc;padding-bottom:8px}h3{font-size:19px}'
      '.meta{font-size:13px;color:#547077}.notice{background:#f2f6f6;border-left:4px solid #16827c;padding:14px}.text{white-space:pre-wrap;overflow-wrap:anywhere}'
      'img{width:100%;height:auto;border:1px solid #dae3e6;margin:12px 0}.source{font-size:14px;background:#f5f7f9;padding:14px}.slide{margin:32px 0}'
      'li{margin:4px 0}.question{margin:24px 0;break-inside:avoid}table{border-collapse:collapse;width:100%;font-size:14px}td,th{border:1px solid #ccd7de;padding:8px;text-align:left}'
      'a{color:#147b78}button{padding:10px 18px}@media print{body{font-size:10.5pt;padding:0;margin:0;max-width:none}.no-print{display:none}.chapter,.answers{break-before:page}.slide{break-before:page}.text{overflow-wrap:anywhere}h2,h3{break-after:avoid}img{max-height:65vh;object-fit:contain}}'
      '</style></head><body>'
      f'<p class="meta">SEHS5083 · Test 1 · 2026-11-01</p><h1>{esc(title)}</h1>'
      f'<p class="notice">{esc(NOTICE)}</p><p class="no-print"><button onclick="window.print()">打印 / 另存 PDF</button> '
      '<a href="../sehs5083.html">返回学习网站</a></p>'+body+'</body></html>')

def reports(data):
    out = ROOT/'notes/sehs5083'
    out.mkdir(parents=True, exist_ok=True)
    body = '<h2>考试范围</h2><ul>'
    for c in data['chapters']:
        body += f'<li>Chapter {c["chapter"]}: {esc(c["titleEn"])} · {len(c["slides"])} 页 · {esc(", ".join(map(str,SCOPE[c["chapter"]])))}</li>'
    body += '</ul><h2>答题方法</h2><p>先识别变量及研究问题，再说明方法、结果和限制。计算题写单位与过程；假设检验同时解释 p 值、效应大小与不确定性；回归题说明控制了哪些变量，并检查模型诊断。英文参考答案采用简短表达，中文解读帮助理解。</p>'
    for c in data['chapters']:
        body += f'<section class="chapter"><h2>Chapter {c["chapter"]} · {esc(c["titleZh"])} / {esc(c["titleEn"])}</h2>'
        for correction in data['corrections']:
            if correction['chapter'] == c['chapter']:
                body += f'<p class="notice">P{esc(", ".join(map(str,correction["slides"])))}：{esc(correction["text"])}</p>'
        notes = {n['slide']:n for n in c['studyNotes']}
        for s in c['slides']:
            n = notes[s['slide']]
            body += f'<article class="slide"><h3>Chapter {c["chapter"]} · P{s["slide"]} · {esc(n["title"])}</h3>'
            body += f'<img loading="lazy" src="../{esc(s["image"])}" alt="Chapter {c["chapter"]} Slide {s["slide"]}">'
            body += '<h4>中文理解</h4>'+block(n['explanationZh'])+'<h4>简单英文速记</h4>'+block(n['simpleEn'])
            body += '<h4>复习要点</h4><ul>'+''.join(f'<li>{esc(x)}</li>' for x in n['examFocus'])+'</ul>'
            if n.get('visualExplanation'): body += '<h4>图表解读</h4>'+block(n['visualExplanation'])
            body += '<p class="notice">易错点：'+esc(n['pitfall'])+'</p>'
            body += '<h4>原页文字</h4>'+block(s['text'] or '本页无可提取正文，请参照原图。','source')
            for table in s.get('tables',[]):
                body += '<table>'+''.join('<tr>'+''.join('<td>'+esc(x)+'</td>' for x in row)+'</tr>' for row in table)+'</table>'
            body += '<h4>讲者备注（原文）</h4>'+block(s['notes'] or '本页无讲者备注。','source')+'</article>'
        body += '</section>'
    (out/'SEHS5083_Test1_Revision.html').write_text(page('Test 1 逐页复习资料',body),encoding='utf-8')
    qs = [q for c in data['chapters'] for q in c['questions']]
    body = f'<p>共 {len(qs)} 道模拟题，含基础与综合层级。选择题可自动判分，简答、计算与案例请对照评分点自评。</p>'
    for c in data['chapters']:
        body += f'<h2>Chapter {c["chapter"]} · {esc(c["titleZh"])}</h2>'
        for q in c['questions']:
            body += f'<article class="question"><h3>{esc(q["id"])} · {"基础" if q["difficulty"]=="basic" else "综合"} · {q["marks"]} 分</h3>'
            body += block(q['promptEn'])+block(q['promptZh'])
            if q.get('options'): body += '<ol type="A">'+''.join('<li>'+esc(x)+'</li>' for x in q['options'])+'</ol>'
            body += f'<p class="meta">来源：Chapter {c["chapter"]} · P{esc(", ".join(map(str,q["sourceSlides"])))}</p></article>'
    body += '<section class="answers"><h2>答案、解析与评分点</h2>'
    for q in qs:
        body += f'<article class="question"><h3>{esc(q["id"])}</h3>'
        if q['type']=='mcq': body += '<p>答案：'+chr(65+q['correctIndex'])+'</p>'
        body += block(q['answerEn'])+block(q['answerZh'])+block(q['explanationZh'])
        body += '<ul>'+''.join('<li>'+esc(x)+'</li>' for x in q['rubric'])+'</ul></article>'
    body += '</section>'
    (out/'SEHS5083_Test1_Questions.html').write_text(page('Test 1 分层模拟题与答案',body),encoding='utf-8')
    md = '# SEHS5083 Test 1 逐页复习与模拟题\n\n'+NOTICE+'\n\n'
    for c in data['chapters']:
        md += f'## Chapter {c["chapter"]}: {c["titleEn"]}\n\n'
        for n in c['studyNotes']:
            md += f'### P{n["slide"]}: {n["title"]}\n\n{n["explanationZh"]}\n\n{n["simpleEn"]}\n\n易错点：{n["pitfall"]}\n\n'
    md += '## 模拟题\n\n'
    for q in qs:
        md += f'### {q["id"]} ({q["difficulty"]}, {q["marks"]} marks)\n\n{q["promptEn"]}\n\n{q["promptZh"]}\n\n'
        if q.get('options'): md += '\n'.join(chr(65+i)+'. '+x for i,x in enumerate(q['options']))+'\n\n'
        md += f'答案：{q["answerEn"]}\n\n{q["answerZh"]}\n\n解析：{q["explanationZh"]}\n\n评分点：'+ '；'.join(q['rubric'])+'\n\n'
    (out/'Test1_Revision_and_Questions.md').write_text(md,encoding='utf-8')

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--extracted',type=Path,required=True)
    parser.add_argument('--content',type=Path,required=True)
    parser.add_argument('--uploads',type=Path,required=True)
    args = parser.parse_args()
    data={'course':'SEHS5083','courseTitle':'Statistical Analysis for Health Data Insights','lecturer':'Dr Wilson Leung',
          'version':'2026-11-01','scope':SCOPE,'notice':NOTICE,'corrections':CORRECTIONS,'chapters':[],'sources':[]}
    for ch in range(1,5):
        raw=json.loads((args.extracted/f'chapter-{ch}.json').read_text())
        content=json.loads((args.content/f'chapter-{ch}-content.json').read_text())
        assert raw['scope_slides']==SCOPE[ch]
        assert sorted(n['slide'] for n in content['studyNotes'])==SCOPE[ch]
        images={}
        slides=[]
        for s in raw['slides']:
            n=s['slide'];name=f'C{ch}-P{n:03}.webp'
            path=args.extracted/s['rendered_image']
            images[name]=base64.b64encode(path.read_bytes()).decode()
            entry={'slide':n,'text':s['text'],'notes':s['notes'],'tables':s['tables'],'smartArtText':s.get('smartArtText',''),
                   'ocrText':s.get('ocrText',''),'ocrStatus':'Unverified OCR; check source image.',
                   'image':'assets/sehs5083/'+name,'embeddedImages':[]}
            for img in s['images']:
                if not img.get('path'): continue
                p=args.extracted/img['path'];iname=p.name
                images[iname]=base64.b64encode(p.read_bytes()).decode()
                entry['embeddedImages'].append({'path':'assets/sehs5083/'+iname,'width':img.get('width'),'height':img.get('height')})
            slides.append(entry)
        content['slides']=slides
        content['source']=raw['source']
        data['chapters'].append(content)
        source=args.uploads/raw['source']
        data['sources'].append({'filename':source.name,'sha256':hashlib.sha256(source.read_bytes()).hexdigest(),'totalSlides':raw['total_slides'],'scopeSlides':SCOPE[ch]})
        path=ROOT/f'source-assets/sehs5083-C{ch}.json.gz'
        path.parent.mkdir(exist_ok=True)
        path.write_bytes(gzip.compress(json.dumps(images,separators=(',',':')).encode(),mtime=0))
    src=args.uploads/'Test 1 Scope.docx'
    data['sources'].append({'filename':src.name,'sha256':hashlib.sha256(src.read_bytes()).hexdigest()})
    write_json(ROOT/'data/sehs5083/test1.json',data)
    reports(data)
    print(json.dumps({'slides':sum(len(c['slides']) for c in data['chapters']),'questions':sum(len(c['questions']) for c in data['chapters'])}))

if __name__=='__main__':main()
