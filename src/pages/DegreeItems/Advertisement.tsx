function Advertisement() {
  return (
    <div className="h-full md:w-[85%] mx-auto  ">
      <h1 className="text-center font-semibold text-md py-20">Advertisement</h1>
      <div className="px-3">
        <div className="border p-2 mb-10">
          {/* To Let Section */}
          <div className="border p-4 mb-6 max-w-md mx-auto">
            <h3 className="font-semibold underline mb-4 text-center">To Let</h3>
            <ul className="list-disc pl-6">
              <li>Aristocratic Area.</li>
              <li>Overlooking Lake.</li>
              <li>All time Security.</li>
              <li>Near School/College/Varsity/Market/Hospital.</li>
              <li>Pollution Free.</li>
              <li>Beside Highway.</li>
              <li>Reasonable Price/Rent.</li>
              <li>3 Bed, 2 Bath, 1 Spacious Dining.</li>
            </ul>
            <p className="mt-4 font-semibold text-end">Please Contact:</p>
            <p className="text-end">Mobile: 017513337773</p>
          </div>

          {/* Rent A Car Section */}
          <div className="border p-4 mb-6 max-w-md mx-auto">
            <h3 className="font-semibold underline mb-4 text-center">
              Rent A Car
            </h3>
            <ul className="list-disc pl-6">
              <li>All Automatic Option.</li>
              <li>Charming Color.</li>
              <li>Attractive Design.</li>
              <li>Latest Model.</li>
              <li>A/C Operated.</li>
              <li>Owner Driven.</li>
            </ul>
            <p className="mt-4 font-semibold text-end">Please Contact:</p>
            <p className="text-end">Mobile: 017513337773</p>
          </div>

          {/* First Come, First Served Section */}
          <div className="border p-4 mb-6 max-w-md mx-auto">
            <h3 className="font-semibold underline mb-4 text-center">
              First Come, First Served
            </h3>
            <ul className="list-disc pl-6">
              <li>Charming Color.</li>
              <li>Attractive Design.</li>
              <li>Latest Model.</li>
              <li>Environment Friendly.</li>
              <li>Money Saving.</li>
              <li>8 Years Warranty.</li>
              <li>Longer Lasting.</li>
              <li>Available Spare parts.</li>
            </ul>
            <p className="mt-4 font-semibold text-end">Please Contact:</p>
            <p className="text-end">Mobile: 017513337773</p>
          </div>
        </div>
      </div>
      <div className="">
        <img src="img/adv1.jpg" alt="" />
      </div>
    </div>
  );
}

export default Advertisement;
