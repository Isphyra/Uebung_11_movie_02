<script>
    let { data } = $props();
</script>

<div class="container mt-4">
    <a href="/Movies">Back</a>
    <h1>{data.movie.Title}</h1>
    <div class="row">
        <div class="col-md-4">
            <img src={data.movie.poster} alt={data.movie.Title} class="img-fluid" />
        </div>
        <div class="col-md-8">
            <p>Jahr: {data.movie.Year}</p>
            <p>Dauer: {data.movie.Duration}</p>
            <p>Actors:</p>
            <ul>
                {#each data.movie.Actors as actor}
                    <li>{actor}</li>
                {/each}
            </ul>
        </div>
    </div>
</div>
