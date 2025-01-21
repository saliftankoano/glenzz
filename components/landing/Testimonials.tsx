import Image from 'next/image';

export default function Testimonials() {
  return (
    <section id='testimonials' className='bg-neutral-50 py-24 text-black'>
      <div className='container mx-auto px-4'>
        <h2 className='mb-16 text-center text-4xl font-bold'>
          Trusted by Industry Leaders
        </h2>
        <div className='grid grid-cols-3 gap-8'>
          <div className='rounded-xl bg-white p-8 shadow-sm'>
            <div className='mb-6 flex items-center space-x-4'>
              <Image
                src='https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=456'
                className='h-12 w-12 rounded-full'
                width={48}
                height={48}
                alt='Testimonial Avatar'
              />
              <div>
                <h4 className='font-semibold'>Sarah Johnson</h4>
                <p className='text-sm text-neutral-600'>
                  Sustainability Director
                </p>
              </div>
            </div>
            <p className='text-neutral-600'>
              &quot;ESG for Good has transformed how we handle our
              sustainability reporting.&quot;
            </p>
          </div>
          <div className='rounded-xl bg-white p-8 shadow-sm'>
            <div className='mb-6 flex items-center space-x-4'>
              <Image
                src='https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=789'
                className='h-12 w-12 rounded-full'
                width={48}
                height={48}
                alt='Testimonial Avatar'
              />
              <div>
                <h4 className='font-semibold'>Michael Chen</h4>
                <p className='text-sm text-neutral-600'>ESG Analyst</p>
              </div>
            </div>
            <p className='text-neutral-600'>
              &quot;The automated data collection has saved us countless hours
              of manual work.&quot;
            </p>
          </div>
          <div className='rounded-xl bg-white p-8 shadow-sm'>
            <div className='mb-6 flex items-center space-x-4'>
              <Image
                src='https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=101'
                className='h-12 w-12 rounded-full'
                width={48}
                height={48}
                alt='Testimonial Avatar'
              />
              <div>
                <h4 className='font-semibold'>Emma Davis</h4>
                <p className='text-sm text-neutral-600'>Chief Impact Officer</p>
              </div>
            </div>
            <p className='text-neutral-600'>
              &quot;Real-time analytics help us make better sustainability
              decisions.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
