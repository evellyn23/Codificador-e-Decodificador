function criptografar() {
    let texto = document.getElementById("input-texto").value;
    let textoCriptografado = "";
  
    for (let i = 0; i < texto.length; i++) {
      let caractere = texto[i];
      switch (caractere) {
        case "a":
          textoCriptografado += "ai";
          break;
        case "e":
          textoCriptografado += "enter";
          break;
        case "i":
          textoCriptografado += "imes";
          break;
        case "o":
          textoCriptografado += "ober";
          break;
        case "u":
          textoCriptografado += "ufat";
          break;
        default:
          textoCriptografado += caractere;
      }
    }
  
    document.getElementById("output-texto").value = textoCriptografado;
    document.getElementById("copiar").disabled = false;
  }
  
  function descriptografar() {
    let texto = document.getElementById("input-texto").value;
    let textoDescriptografado = "";
  
    for (let i = 0; i < texto.length; i++) {
      let caractere = texto[i];
      switch (caractere) {
        case "a":
          textoDescriptografado += "a";
          break;
        case "e":
          textoDescriptografado += "e";
          break;
        case "i":
          textoDescriptografado += "i";
          break;
        case "o":
          textoDescriptografado += "o";
          break;
        case "u":
          textoDescriptografado += "u";
          break;
        default:
          textoDescriptografado += caractere;
      }
    }
  
    document.getElementById("output-texto").value = textoDescriptografado;
    document.getElementById("copiar").disabled = false;
  }
  
  function copiar() {
    let textoCopiado = document.getElementById("output-texto").value;
    navigator.clipboard.writeText(textoCopiado)
      .then(() => {
        document.getElementById("mensagem-sucesso").style.display = "block";
        setTimeout(() => {
          document.getElementById("mensagem-sucesso").style.display = "none";
        }, 2000);
      })
      .catch(err => {
        console.error("Falha ao copiar: ", err);
      });
  }

  function limpar() {
    document.getElementById("output-texto").value = "";
    document.getElementById("copiar").disabled = true; 

    }