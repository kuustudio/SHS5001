"""Produce a self-contained offline HTML release with embedded JSON/CSS/JS."""
from pathlib import Path
p=Path(__file__).resolve().parent
html=(p/'index.html').read_text()
html=html.replace('__COURSES__',(p/'data/lecture1.json').read_text().replace('</script','<\\/script'))
html=html.replace('__VOCAB__',(p/'data/vocabulary.json').read_text().replace('</script','<\\/script'))
html=html.replace('__EXTRA_COURSES__','['+(p/'data/lecture2.json').read_text().replace('</script','<\\/script')+']')
html=html.replace('<link rel="stylesheet" href="style.css">','<style>'+ (p/'style.css').read_text()+'</style>')
html=html.replace('<script src="app.js"></script>','<script>'+ (p/'app.js').read_text().replace('</script','<\\/script')+'</script>')
(p/'SEHS5001_Interactive_Academy_Offline.html').write_text(html)
print('Built standalone:',(p/'SEHS5001_Interactive_Academy_Offline.html').stat().st_size,'bytes')

