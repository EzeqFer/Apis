
const githubApiUrl = 'https://api.github.com/users/EzeqFer';


async function getGithubUserInfo() {
    try {
        const response = await fetch(githubApiUrl);

        if (response.ok) {
            const userData = await response.json();

            
            console.log('Nombre de usuario: ', userData.login);
            console.log('Nombre: ', userData.name);
            console.log('Ubicación: ', userData.location);
            console.log('Repositorios públicos: ', userData.public_repos);

            
        } else {
            console.error('Error al obtener la información del usuario de GitHub.');
        }
    } catch (error) {
        console.error('Error en la solicitud a la API de GitHub:', error);
    }
}

getGithubUserInfo();
