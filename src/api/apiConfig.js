const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'b0d86c7e479ae6e66b1d9e00dd61cc74',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;