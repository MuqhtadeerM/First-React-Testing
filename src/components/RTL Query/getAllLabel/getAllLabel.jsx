export default function GetAllLabel() {
  return (
    <div>
      <h1>RTK Query : GetAllLabel</h1>

      <label htmlFor="user-name1">UserName</label>
      <input type="text" id="user-name1" />

      <label htmlFor="user-name2">UserName</label>
      <input type="text" id="user-name2" />

      <label htmlFor="user-name3">UserName</label>
      <input type="text" id="user-name3" />

      <br />
      <br />
      <br />

      <label htmlFor="skill1">skills</label>
      <input type="checkbox" defaultChecked={true} id="skill1" />

      <label htmlFor="skill2">skills</label>
      <input type="checkbox" defaultChecked={true} id="skill2" />

      <label htmlFor="skill3">skills</label>
      <input type="checkbox" defaultChecked={true} id="skill3" />
    </div>
  );
}
