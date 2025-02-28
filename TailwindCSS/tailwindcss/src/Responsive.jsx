function Responsive() {
  return (
    // In responsive it is mobile first, shows in opposite way
    <div className="grid grid-cols-12">
      <div className="col-span-12 sm:col-span-4 bg-red-400">Child 1</div>
      <div className="col-span-12 sm:col-span-6 bg-blue-400">Child 2</div>
      <div className="col-span-12 sm:col-span-2 bg-yellow-400">Child 3</div>
    </div>
  );
}

export default Responsive;
