import RedHeading from "./redHeading"

function Month() {
  return (
    <>
      <section className="mt-[70px]">
        {/* heading */}
        <RedHeading text="This Month" textColor="red" />

        {/* category */}
        <div className='flex justify-between items-end'>
          <div className='mt-[24px] flex items-center'>
            <h2 className='inline-block text-[36px] leading-[48px] font-semibold'>Best Selling Products</h2>
          </div>

          <button className='bg-[#DB4444] py-[16px] px-[48px] hover:bg-gray-600 text-white'>View All</button>
        </div>

      </section>
    </>
  )
}

export default Month