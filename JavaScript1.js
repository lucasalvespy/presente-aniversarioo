function abrirlivro() {

	document.querySelector(".capa").style.display = "none";
	document.querySelector("#pagina1").style.display = "flex";
}
let fotoAtual = 1;

	const textosFotos = [
		"Aqui eu ja sabia que iria te amar por toda a minha vida 🧡","Esse momento eu nunca vou esquecer. Foi a primeira vez que a gente se viu, e você estava tão linda","Essa estávamos muito bebados kkkk",
		"Aqui também kkkkkk. Foi no mesmo dia da anterior taaaa", "BAR DO ROQUEEEE", "MDSSSSS 🧡", "Uma das melhores fotos TAAAA. VC estava perfeitaa",
		"TADINHAAAAAAAA", "Voce estava PERFEITAAAAAA 🧡", "Bonitinha mdsss" ];

function mostrarFoto() {
		const foto =
	document.querySelector("#fotoAlbum");

		foto.style.opacity = "0";

		setTimeout(() => {
			foto.src = "fotos/A" + fotoAtual + ".jpg";

	document.querySelector("#contador").textContent = fotoAtual + " / 10";
	document.querySelector("#textoFoto").textContent = textosFotos[fotoAtual -1];
			foto.style.opacity = "1";
	}, 200);
}

function proximaFoto() {
	if (fotoAtual < 10) { fotoAtual++;
		mostrarFoto();
	}
}

function fotoAnterior() {
	if (fotoAtual > 1) { fotoAtual--;
		mostrarFoto();
	}
}

function surpresaBolo() {
	document.querySelector("#fotoSurpresa").style.display = "block";
	document.querySelector("#mensagemSurpresa").style.display = "block";
}


