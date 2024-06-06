import { FaFileImport, FaFileExport } from 'react-icons/fa';
import { Table, InputGroup, FormControl, Button, DropdownButton, Dropdown } from 'react-bootstrap';

export default function Grades() {
  return (
    <div id="wd-grades" className="container mt-3">
      <h1 className="mb-4">Grades</h1>
      <div className="d-flex justify-content-end mb-4">
        <Button variant="secondary" className="me-2">
          <FaFileImport className="me-1" />
          Import
        </Button>
        <DropdownButton
          variant="secondary"
          title={
            <>
              <FaFileExport className="me-1" />
              Export
            </>
          }
        >
          <Dropdown.Item href="#">Export as CSV</Dropdown.Item>
          <Dropdown.Item href="#">Export as PDF</Dropdown.Item>
        </DropdownButton>
      </div>
      <InputGroup className="mb-4">
        <FormControl
          placeholder="Search Students"
          aria-label="Search Students"
          className="me-2"
        />
        <FormControl
          placeholder="Search Assignments"
          aria-label="Search Assignments"
        />
      </InputGroup>
      <Table responsive bordered hover className="table-striped mb-4">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>A1 SETUP <br /> Out of 100</th>
            <th>A2 HTML <br /> Out of 100</th>
            <th>A3 CSS <br /> Out of 100</th>
            <th>A4 BOOTSTRAP <br /> Out of 100</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jane Adams</td>
            <td>100%</td>
            <td>96.67%</td>
            <td>92.18%</td>
            <td>66.22%</td>
          </tr>
          <tr>
            <td>Christina Allen</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>Sameer Ansari</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>Han Bao</td>
            <td>100%</td>
            <td>100%</td>
            <td><input type="text" value="88.00%" className="form-control" /></td>
            <td>98.99%</td>
          </tr>
          <tr>
            <td>Mahi Sai Srinivas Bobbili</td>
            <td>100%</td>
            <td>96.67%</td>
            <td>98.37%</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>Siran Cao</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
