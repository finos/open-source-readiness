import React from 'react';
import html2pdf from 'html2pdf.js';

function download(id) {

	var element = document.getElementById(id)

	html2pdf().set({
		pagebreak: { mode: 'avoid-all', before: '#page2el' },
		image: { type: 'png' },
		html2Canvas: { scale: 5 },
		filename: 'osr-maturity-checklis.pdf'
	})
		.from(element)
		.toContainer()
		.toCanvas()
		.toImg()
		.toPdf()
		.save()

}

export default function Button({id}) {
	return (
		<a onClick={() => download(id)} href="#">Download as PDF</a>
	)
}

