export default function GetLabel() {
  return (
    <div>
      <h1>RTL Query : getLabelText</h1>
      <label htmlFor="user-name">Username</label>
      <input type="text" id="user-name" defaultValue={"muqhtadeer"} />

      <label htmlFor="skills">Skills</label>
      <input type="checkbox" id="skills" checked />
    </div>
  );
}
