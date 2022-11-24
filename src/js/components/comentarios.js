export default {
  data() {
    return {
      // nome: "",
      // mensagem: "",
      inputNome: "",
      txtMensagem: "",
      comentarios: [
        {
          nome: "",
          comentario: "",
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
