import axios from "axios";

const MoviesService = {
    getMovieById: async function(value) {
        try {
            const res = await axios.get(`http://localhost:8800/client/movies/find/${value}`,
            {
             headers:{
               token:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzBkZTNkNWQ0ODAxZGVmODk5MTUyMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3ODE3NzYzMiwiZXhwIjoxNjc4NjA5NjMyfQ.ZGc0UH7TZyI8saXLo5HiRiqBgAB0DrkB2EsjAWghNGM"
             }
            });
            return res.data;
         } catch (err) {
           console.log(err)
         }
    },

    
};

export default MoviesService;