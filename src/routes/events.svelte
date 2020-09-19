<svelte:head>
    <title>Events</title>
</svelte:head>

<script>
    import EventComponent from '../components/EventComponent.svelte';
</script>


<div class="main-title">EVENTS</div>
<EventComponent title="Git/Github Workshop" about="Learn about git and github." time="12:00AM 1 OCT 2002"
    location="LT6" />
<EventComponent title="Hacktoberfest" about="Contribute to open source to get a free t-shirt" time="12:00AM 1 OCT 2002"
    location="LT5" />


<style>
    .main-title {
        font-size: 3rem;
        font-weight: bold;
    }

    @media (max-width:700px) {
        .main-title {
            font-size: 2rem;
        }
    }
</style>