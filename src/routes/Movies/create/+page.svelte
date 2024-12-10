<script>
    let { form } = $props();
    
</script>

<div class="container mt-2">
    <a href="/movies" class="btn btn-link text-light mb-4">Back</a>
    <h2 class="mb-4">Add a Movie</h2>
    <form method="POST" action="?/create" class="needs-validation">
        <div class="mb-3">
            <label for="name" class="form-label">Name:</label>
            <input
                id="name"
                name="name"
                class="form-control"
                type="text"
                required
                placeholder="Enter the name of the movie"
            />
        </div>
        <div class="mb-3">
            <label for="year" class="form-label">Year:</label>
            <input
                id="year"
                name="year"
                class="form-control"
                type="number"
                required
                placeholder="Enter the year"
            />
        </div>
        <div class="mb-3">
            <label for="duration" class="form-label">Duration:</label>
            <input
                id="duration"
                name="duration"
                class="form-control"
                type="number"
                required
                placeholder="Enter the duration in minutes"
            />
        </div>
        <div class="mb-3">
            <label for="actors" class="form-label">Actors:</label>
            <input
              id="actors"
              name="actors"
              class="form-control"
              type="text"
              required
              placeholder="Enter actors, separated by commas"
            />
          </div>          
        <button type="submit" class="btn btn-primary">Add Movie</button>
    </form>
</div>
{#if form?.success}
<p class="mt-3 text-danger">Movie created successfully!</p>
{/if}

{#if form?.error}
    <p class="mt-3 text-danger">{form.error}</p>
{/if}
