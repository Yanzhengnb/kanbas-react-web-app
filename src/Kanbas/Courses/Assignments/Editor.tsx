export default function AssignmentEditor() {
    return (
        
      <div id="wd-assignments-editor" >
        <label htmlFor="wd-name">Assignment Name</label><br/><br/>
        <input id="wd-name" value="A1" style={{ width: "100%" }}/><br /><br/>
        <textarea id="wd-description" style={{ width: "100%"  } }>
          The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name adn section Links to each of the lab assignments Link to the Kanbas application.
        </textarea>
        <br />
        <table >
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} style={{ width: "100%" }}/>
          </td>
         </tr><br/>
         <tr>
         <td align="right" valign="top">
        <label htmlFor="wd-group" >Assignment Group </label></td>
        <td>
        <select style={{ width: "100%" }}>
         <option value="ASSIGNMENT">ASSIGNMENT</option>
            <option value="NON ASSIGNMENT">NON ASSIGNMENT</option>
            </select>
            </td>
            </tr><br/>
            <tr>
            <td align="right" valign="top">
        <label htmlFor="wd-display-grade-as" >Display Grade as</label></td>
        <select style={{ width: "100%" }}>
         <option value="Percentage">Percentage</option>
            <option value="Digital">Digital</option>
            </select>
           </tr><br/>
           <tr>
            <td align="right" valign="top">
        <label htmlFor="wd-submission-type" >Submission Type</label></td>
        <select style={{ width: "100%" }}>
         <option value="Online">Online</option>
            <option value="In Person">In Person</option>
            </select>
           </tr>
           </table>
           <br/>
           <table style={{ width: "100%", marginLeft: "140px" }}>
            <tr>
            
          <td align="left" valign="top">
           <label>Online Entry Options</label></td>
           </tr>
           <tr>
           <td>
           <input type="checkbox" name="wd-text-entry" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Test Entry</label>
            </td></tr>
            <tr>
          <td>
            <input type="checkbox" name="wd-website-url" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="wd-media-recordings" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="wd-student-annotation" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" name="wd-file-upload" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>
        <br/>
        
        <tr> 
          <td align="left" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            </tr>
            <tr>
            <td>
            <input id="wd-assign-to" value="Everyone"/>
          </td>
         </tr>
         <br/>
         <tr>
            <td><label htmlFor="wd-due-date">Due</label>
            </td>
            </tr>
            <tr>
            <td>
         <input type="date" id="wd-due-date" value="2024-05-13"/>
         </td>
         </tr>
         <br/>
         <tr>
  <td>
    <label htmlFor="wd-available-from">Available from</label><br/>
    <input type="date" id="wd-available-from" value="2024-05-06" />
  </td>
  <td style={{width:"100%"}}>
    <label htmlFor="wd-available-until">Until</label><br/>
    <input type="date" id="wd-available-until" value="2024-05-20" />
  </td>
</tr>
      </table>
      <hr />
      <button style={{float:"right"}}>Save</button>
      <button style={{float:"right"}}>Cancel</button>

    </div>
);}
