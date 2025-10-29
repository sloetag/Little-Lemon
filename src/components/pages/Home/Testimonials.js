import customer1Image from './assets/customer1.jpg';
import customer2Image from './assets/customer2.jpg';
import customer3Image from './assets/customer3.jpg';
import customer4Image from './assets/customer4.jpg';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';

const customers = [
  {
    fullName: 'Maria Sanchez',
    image: customer1Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Exceptional food, impeccable service, and a cozy atmosphere—perfect for any occasion. Highly recommend!.`,
  },
  {
    fullName: 'Antony Clifton',
    image: customer2Image,
    rating: [1, 1, 1, 1, 1],
    says: `Fresh ingredients, creative dishes, and friendly staff made our dinner unforgettable. Will return soon!`

  },
  {
    fullName: 'Tamika Jackson',
    image: customer3Image,
    rating: [1, 1, 1, 1, 0.5],
    says: `Outstanding flavors, generous portions, and a warm ambiance—this gem exceeded all expectations. `
  },
  {
    fullName: 'Brandon Ming',
    image: customer4Image,
    rating: [1, 1, 1, 1],
    says: `Every bite was delicious, the ambiance was inviting, and the staff went above and beyond.`
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container grid">
        <h2>What people say about us!</h2>
        {customers.map((customer, index) =>   
          <TestimonialCard key={index} customer={customer} />
        )}
     </div>
    </section>
  );
};

export default Testimonials;
