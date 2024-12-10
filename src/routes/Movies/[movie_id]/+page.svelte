<script>
    let { data } = $props();
</script>

<div class="container mt-4">
    <a href="/movies" class="btn btn-link text-light mb-4">Back</a>
    <h1>{data.movie.title}</h1>
    <div class="row">
        <div class="col-md-4">
            <img src={data.movie.poster} alt={data.movie.title} class="img-fluid" />
        </div>
        <div class="col-md-8">
            <p>Jahr: {data.movie.year}</p>
            <p>Dauer: {data.movie.duration}</p>
            <p><b>Actors:</b></p>
            <ul>
                {#each data.movie.actors as actor}
                    <li>{actor}</li>
                {/each}
            </ul>
        </div>
    </div>
</div>
