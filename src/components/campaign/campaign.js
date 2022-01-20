export const Campaign = () => {


return (
  

<div className="ml-9 md:grid md:grid-cols-3 md:gap-6">
    
    <div className="mt-5 md:mt-0 md:col-span-2">
        
      <form action="#" method="POST">
          
        <div className="shadow overflow-hidden sm:rounded-md">
        <div className="md:col-span-2">
      <div className="px-4 sm:px-0">
        <h3 className=" ml-2 mt-5 text-lg font-medium leading-6 text-gray-900"> Find your Legislator</h3>
        <p className=" ml-2 mt-2 text-sm text-gray-600">
         using your current address.
        </p>
      </div>
    </div>
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label for="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label for="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                <input type="text" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label for="email_address" className="block text-sm font-medium text-gray-700">Email address</label>
                <input type="text" name="email_address" id="email_address" autocomplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label for="country" className="block text-sm font-medium text-gray-700">State</label>
                <select id="country" name="country" autocomplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Tennessee</option>
                  <option>list of states</option>
                  <option>Mississippi</option>
                </select>
              </div>

              <div className="col-span-6">
                <label for="street_address" className="block text-sm font-medium text-gray-700">Street address</label>
                <input type="text" name="street_address" id="street_address" autocomplete="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label for="city" className="block text-sm font-medium text-gray-700">City</label>
                <input type="text" name="city" id="city" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

           

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="postal_code" className="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                <input type="text" name="postal_code" id="postal_code" autocomplete="postal-code" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>


    
    
)
}