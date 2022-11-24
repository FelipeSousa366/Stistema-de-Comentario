export default {
  data() {
    return {
      // nome: "",
      // mensagem: "",
      inputNome: "",
      txtMensagem: "",
      comentarios: []
    };
  },
  methods: {
    adComentario() {
      if(this.txtMensagem.trim() === '') return 
      if(this.inputNome.trim() === "") this.inputNome = 'Usuário Anônimo'
        this.comentarios.push({
          nome: this.inputNome,
          comentario: this.txtMensagem,
        });
      this.inputNome=''
      this.txtMensagem=''
    },
    excluir(n){
      this.comentarios.splice(n,1)
    }
  },
};
