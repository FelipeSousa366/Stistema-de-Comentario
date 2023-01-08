var avaliacao = 0






export default {
  data() {
    return {
      // nome: "",
      // mensagem: "",
      inputNome: "",
      txtMensagem: "",
      comentarios: [],
      
      
    };
  },
  methods: {
    adComentario() {
      if (this.txtMensagem.trim() === "") return;
      if (this.inputNome.trim() === "") this.inputNome = "Usuário Anônimo";
      this.comentarios.push({
        nome: this.inputNome,
        comentario: this.txtMensagem,
        nota: avaliacao
      });
      
      
 
      
      avaliacao = 0
      this.inputNome = "";
      this.txtMensagem = "";
      
      

    },
    excluir(n) {
      this.comentarios.splice(n, 1);
    },
    Avaliar(estrela) {

    if (estrela == 5) {
      document.getElementById("s1").src = "assets/img/star1.png";
      document.getElementById("s2").src = "assets/img/star1.png";
      document.getElementById("s3").src = "assets/img/star1.png";
      document.getElementById("s4").src = "assets/img/star1.png";
      document.getElementById("s5").src = "assets/img/star1.png";
      
      avaliacao = 5;
    }

    //ESTRELA 4
    if (estrela == 4) {
      document.getElementById("s1").src = "assets/img/star1.png";
      document.getElementById("s2").src = "assets/img/star1.png";
      document.getElementById("s3").src = "assets/img/star1.png";
      document.getElementById("s4").src = "assets/img/star1.png";
      document.getElementById("s5").src = "assets/img/star0.png";
      avaliacao = 4;
    }

    //ESTRELA 3
    if (estrela == 3) {
      document.getElementById("s1").src = "assets/img/star1.png";
      document.getElementById("s2").src = "assets/img/star1.png";
      document.getElementById("s3").src = "assets/img/star1.png";
      document.getElementById("s4").src = "assets/img/star0.png";
      document.getElementById("s5").src = "assets/img/star0.png";
      avaliacao = 3;
    }

    //ESTRELA 2
    if (estrela == 2) {
      document.getElementById("s1").src = "assets/img/star1.png";
      document.getElementById("s2").src = "assets/img/star1.png";
      document.getElementById("s3").src = "assets/img/star0.png";
      document.getElementById("s4").src = "assets/img/star0.png";
      document.getElementById("s5").src = "assets/img/star0.png";
      avaliacao = 2;
    }

    //ESTRELA 1
    if (estrela == 1) {
      document.getElementById("s1").src = "assets/img/star1.png";
      document.getElementById("s2").src = "assets/img/star0.png";
      document.getElementById("s3").src = "assets/img/star0.png";
      document.getElementById("s4").src = "assets/img/star0.png";
      document.getElementById("s5").src = "assets/img/star0.png";
      avaliacao = 1;
    }

    document.getElementById("rating").innerHTML = avaliacao;
  },
  
}
};
