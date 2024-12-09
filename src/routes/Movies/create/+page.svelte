<script>
    let { form } = $props();
    
</script>

<div class="container mt-2">
    <a href="/Movies" class="btn btn-link text-light mb-4">Back</a>
    <h2 class="mb-4">Add a Movie</h2>
    <form method="POST" action="?/create" class="needs-validation">
        <div class="mb-3">
            <label for="name" class="form-label">Name of the Movie</label>
            <input
                id="name"
                name="name"
                class="form-control"
                type="text"
                required
            />
        </div>
        <div class="mb-3">
            <label for="Year" class="form-label">Year where the Movie came out (Only Numbers)</label>
            <input
                id="Year"
                name="Year"
                class="form-control"
                type="number"
                required
            />
        </div>
        <div class="mb-3">
            <label for="length" class="form-label">Duration of the Movie (Only Numbers)</label>
            <input
                id="Duration"
                name="Duration"
                class="form-control"
                type="number"
                required
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
