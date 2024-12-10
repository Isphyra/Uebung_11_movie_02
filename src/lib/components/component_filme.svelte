<script>
    let {movie} = $props();
</script>
<div>
    <img src={movie.poster} alt={movie.title} />
    <h3>{movie.title}</h3>
    <p>Year: {movie.year}</p>
    <p>Duration: {movie.duration}</p>
</div>
    