<script>
    let {movie} = $props();
</script>
<div>
    <img src={movie.Poster} alt={movie.Title} />
    <h3>{movie.Title}</h3>
    <p>Year: {movie.year}</p>
    <p>Duration: {movie.Duration}</p>
</div>
    