export default function Custom() {
  return (
    <div>
      <h1>Multiple item with role</h1>
      <h1>Custom Role</h1>
      <button>Click 1</button>
      <button>Click 2</button>

      <label htmlFor="input1">User Name</label>
      <input type="text" id="input1" />
      <label htmlFor="input2">User Age</label>
      <input type="text" id="input2" />

      {/* dummy is the custom role */}
      <div role="dummy">Dummy Text</div>
    </div>
  );
}
