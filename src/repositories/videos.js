
import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(objetoDoVideo) {
    console.log(URL_VIDEOS);
    return fetch(`${URL_VIDEOS}?_embed=videos`,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(objetoDoVideo),//objeto_do_video
    })
        .then(async (respostaDoServidor) => {
            if (respostaDoServidor.ok) {
                const resposta = await respostaDoServidor.json();
                return resposta;
              }
        
              throw new Error('Não foi possível cadastrar os dados :(');
    });
}

export default {
    create,
};