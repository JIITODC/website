<svelte:head>
    <title>Events</title>
</svelte:head>

<script>
    import {onMount} from 'svelte';
    import EventComponent from '../components/EventComponent.svelte';

    let datas = [];

    onMount(async () => {
        const res = await fetch('./Data/events.json');
        const textData = await res.text();
        datas = await JSON.parse(textData);
    });

    const compareDate = (prevTime) => {
        let [prevDate,prevMonth,prevYear] = prevTime.split("-");
        let [month, date, year]    = ( new Date() ).toLocaleDateString().split("/");
        if(+prevDate < +date || +prevMonth < +month || +prevYear < +year) {
            return false;
        } else {
            return true;
        }
    }
</script>


<div class="main-title">EVENTS</div>
<div class="divider"></div>
<div class="sub-title"> Upcoming Events</div>
{#each datas as data (data.id)} 
    {#if compareDate(data.formatDate)}
        <EventComponent title={data.title} about={data.about} time={data.time}
    location={data.location} imagelink={data.imagelink} />
    {/if}
{/each}
<div class="sub-title"> Past Events</div>
{#each datas as data (data.id)} 
    {#if !compareDate(data.formatDate)}
        <EventComponent title={data.title} about={data.about} time={data.time}
    location={data.location} imagelink={data.imagelink} />
    {/if}
{/each}

<style>
    .main-title {
        font-size: 3rem;
        font-weight: bold;
    }

    .divider{
    height: 3px;
    width: 181px;
    background-color: orange;
    }

    .sub-title {
        font-size: 2rem;
        margin-top: 4rem;
    }

    @media (max-width:768px) {
        .main-title {
            font-size: 2rem;
        }
        .divider{
            width: 120px;
        }
    }
</style>