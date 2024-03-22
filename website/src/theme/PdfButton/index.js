import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export function ensureJs(url) {
	return new Promise((resolve, reject) => {
		if (!document.getElementById(url)) {
			const script = document.createElement('script')
			script.type = 'text/javascript'
			script.onload = resolve
			script.onerror = reject
			script.src = url
			script.id = url
			document.head.append(script)
		} else {
			resolve(true)
		}
	});
}

function download(id) {

	ensureJs('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js').then(() => {
		var element = document.getElementById(id)

		html2pdf().set({
			pagebreak: { mode: 'avoid-all', before: '#page2el' },
			image: { type: 'jpeg', quality: 1 },
			html2Canvas: { scale: 5 },
			filename: 'osr-maturity-checklist.pdf'
		})
			.from(element)
			.toContainer()
			.toCanvas()
			.toImg()
			.toPdf()
			.save()
	})
}

export default function PdfButton({ id }) {
	return (
		<BrowserOnly>{() => <a onClick={() => download(id)} href="#">Download as PDF</a>}</BrowserOnly>
	)
}

