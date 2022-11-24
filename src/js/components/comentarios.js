export default {
  data() {
    return {
      // nome: "",
      // mensagem: "",
      inputNome: "",
      txtMensagem: "",
      comentarios: [
        {
          nome: "felipe pereira",
          comentario: "Muito gamer",
        },
      ],
    };
  },
  methods: {
    adComentario() {
      this.comentarios.push({
        nome: this.inputNome,
        comentario: this.txtMensagem
      });
    },
  },
};
