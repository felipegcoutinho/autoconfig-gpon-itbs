import swal from "sweetalert";

export default async function copyToClip(str) {
  try {
    await navigator.clipboard.writeText(str);
    swal("COPIADO COM SUCESSO!", {
      button: false,
      timer: 1000,
    });
  } catch (err) {
    console.error("Falha ao copiar o texto", err);
  }
}
