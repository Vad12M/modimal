export default function Admin() {

  const types = [
    { name: 'Collection', value: 'collection' },
    { name: 'Color', value: 'color' },
    { name: 'Fabric', value: 'fabric' },
    { name: 'Product', value: 'product' },
    { name: 'Size', value: 'size' },
  ];


  // todo: implement the admin page
  return (
    <div className="flex flex-col">
      <div className="flex items-start">

        <div>
          {types.map((type) => (
            <div key={type.value} className="flex items-center">
            </div>
          ))}

        </div>
        <div>

        </div>
      </div>
    </div>
  )
}
