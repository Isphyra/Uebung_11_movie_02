<script>
  import ComponentFilme from "$lib/components/component_filme.svelte";
  let {data} = $props();

</script>

<div class="container mt-5" >
<div class="container text-center">
  <h1>Aktuelle Filme</h1>
  <p><em>Daten und Bilder generiert von ChatGPT unc DALL-E</em></p>
  <a href="/movies/create" class="btn btn-primary">Add New Movie</a>
  </div>
</div>


<div class="container text-left mt-3">
      <div class="row">
        {#each data.movies as movie}
          <div class="col-md-3 mb-4">
              <div class="card bg-dark text-light shadow" >
              <img src={movie.poster} class="card-img-top" alt={movie.title} />
              <div class="card-body">
                <h5>
                  <a href={`/movies/${movie._id}`} class="card-title">{movie.title}</a>
                </h5>
                <p class="card-text">Jahr: {movie.year}</p>
                <p class="card-text">Dauer: {movie.duration}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
   


    <style>
      .container {
          max-width: 1200px;
      }
      </style>



