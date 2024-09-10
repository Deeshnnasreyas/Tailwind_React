import { REVIEWS } from "../constants/index";
const Reviews = () => {
  return (
    <section className="max-w-7xl mx-auto" id="reviews">
      <div className="mb-20">
        <h2 className="text-xl lg:text-3xl tracking-wide font-medium text-center uppercase mb-12 mt-5">
          Reviews
        </h2>
        <p className="max-w-2xl text-lg mb-12 text-center mx-auto">
          {REVIEWS.text}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center p-4">
          {REVIEWS.reviews.map((review, index) => (
            <div
              key={index}
              className="items-center flex justify-center flex-col border shadow-md border-neutral-300 p-10 mx-2 max-w-xs rounded-2xl"
            >
              <p className="mb-4">{review.review}</p>
              <div className="flex items-center mt-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div className="flex flex-col text-left">
                  <h className="tracking-tight font-semibold">{review.name}</h>
                  <p className="text-sm text-neutral-500">{review.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
