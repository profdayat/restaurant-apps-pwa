import RestaurantSource from '../../data/restaurant-source';
import { restaurantItemTemplate } from '../templates/template-html';
import Spinner from '../templates/spinner-html';

const Home = {
  async render() {
    return `
    <div class="container">
      <div id="loading"></div>
      <div class="main">
        <h2 class="title-container">Explore Restaurant</h2>
        <section id="list-rest">
        </section>
      </div>
    </div>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('#loading');
    const main = document.querySelector('.main');
    loading.innerHTML = Spinner();
    main.style.display = 'none';
    const listContainer = document.querySelector('#list-rest');
    listContainer.innerHTML = '';

    try {
      const data = await RestaurantSource.listRestaurant();
      data.restaurants.forEach((restaurant) => {
        listContainer.innerHTML += restaurantItemTemplate(restaurant);
      });
      main.style.display = 'block';
      loading.style.display = 'none';
    } catch (err) {
      main.style.display = 'block';
      loading.style.display = 'none';
      listContainer.innerHTML = `Error: ${err}, swipe up to refresh!`;
    }
  },
};

export default Home;
