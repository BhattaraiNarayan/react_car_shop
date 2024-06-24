import { dataService } from '../utils/dataService';

const Services = () => {
  return (
    <div className="mx-24 pb-24 min-h-dvh">
      <div className="my-12">
        <h1 className="text-3xl font-semibold">Introduction</h1>
        <p className="text-xl font-regular">
          Welcome to ナラヤンカー&nbsp;センター, your one-stop destination for all
          your automotive needs. Our goal is to provide exceptional service and
          a seamless car-buying experience. Explore our comprehensive range of
          services below.Welcome to ナラヤンカー&nbsp;センター, your one-stop
          destination for all your automotive needs. Our goal is to provide
          exceptional service and a seamless car-buying experience. Explore our
          comprehensive range of services below.
        </p>
      </div>
      <div className='grid grid-cols-3 gap-12'>
         {dataService.map((data)=>{
          const{ id, topic, description } = data;
          return (
            <div key={id} className='border border-box shadow-xl'>
              <h1 className='text-3xl font-semibold m-4 text-center'>{topic}</h1>
              <p className='text-sm font-normal m-4'>{description}</p>
            </div>
          );
         })}
      </div>
    </div>
  );
}

export default Services
