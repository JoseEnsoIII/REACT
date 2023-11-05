import React, { useState } from 'react';
import styled from 'styled-components';
import { RiEdit2Line, RiRefreshLine, RiDeleteBinLine } from 'react-icons/ri';

const Section = styled.section`
  display: flex;
  flex-direction: row; /* Display tables in a row */
  justify-content: space-between;
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column; /* Align tables vertically */
  position: relative; /* Needed for absolute positioning of the Add button */
  margin: 20px;
  top: -250px;
`;

const AddButton = styled.button`
  position: absolute;
  top: -35px;
  right: 5px;
`;

const Table = styled.table`
  width: 50%;
`;

const TableHeader = styled.th`
  border: 1px solid black;
  padding: 8px;
  text-align: left;
`;

const TableRow = styled.tr`
  border: 1px solid black;
`;

const TableCell = styled.td`
  border: 1px solid black;
  padding: 8px;
  text-align: left;
`;

const Icon = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
  height:300px;
  margin-top:20%;
  margin-left:40%;
  bottom:10%;
`;


const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  margin-top:20%;
  margin-right:35%;
`;



function MyComponent() {
  const [isPopupModalOpen, setIsPopupModalOpen] = useState(false);
  const [isBottomModalOpen, setIsBottomModalOpen] = useState(false);

  const openPopupModal = () => {
    setIsPopupModalOpen(true);
  };

  const openBottomModal = () => {
    setIsBottomModalOpen(true);
  };

  const closePopupModal = () => {
    setIsPopupModalOpen(false);
  };

  const closeBottomModal = () => {
    setIsBottomModalOpen(false);
  };

  return (
    <Section>
      <TableContainer>
        <Table>
          <caption>POP UP ADS</caption>
          <thead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Photo</TableHeader>
              <TableHeader>Production</TableHeader>
              <TableHeader>Actions</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableCell>John</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>
                <Icon>
                  <RiEdit2Line />
                  <RiRefreshLine />
                  <RiDeleteBinLine />
                </Icon>
              </TableCell>
            </TableRow>
          </tbody>
        </Table>
        <AddButton onClick={openPopupModal}>Add</AddButton>
        <Modal isOpen={isPopupModalOpen} onClose={closePopupModal}>
          {/* Modal Content for POP UP ADS */}
          <ModalContent>
  <CloseButton onClick={closePopupModal}>X</CloseButton>
  <h1>Bottom Ads</h1>
  <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', marginRight: '10px' }}>
        <label htmlFor="adsName">Ads Name:</label>
        <input type="text" id="adsName" name="adsName" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="productionName">Production Name:</label>
        <input type="text" id="productionName" name="productionName" />
      </div>
    </div>

    <label htmlFor="photo">Upload Photo:</label>
    <input type="file" id="photo" name="photo" accept="image/*" />

    <button type="submit">Submit</button>
  </form>
</ModalContent>
        </Modal>
      </TableContainer>

      <TableContainer>
        <Table>
          <caption>BOTTOM</caption>
          <thead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Photo</TableHeader>
              <TableHeader>Production</TableHeader>
              <TableHeader>Actions</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableCell>John</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>
                <Icon>
                  <RiEdit2Line />
                  <RiRefreshLine />
                  <RiDeleteBinLine />
                </Icon>
              </TableCell>
            </TableRow>
          </tbody>
        </Table>
        <AddButton onClick={openBottomModal}>Add</AddButton>
        <Modal isOpen={isBottomModalOpen} onClose={closeBottomModal}>
          {/* Modal Content for BOTTOM ADS */}
          <ModalContent>
  <CloseButton onClick={closeBottomModal}>X</CloseButton>
  <h1>Bottom Ads</h1>
  <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', marginRight: '10px' }}>
        <label htmlFor="adsName">Ads Name:</label>
        <input type="text" id="adsName" name="adsName" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="productionName">Production Name:</label>
        <input type="text" id="productionName" name="productionName" />
      </div>
    </div>

    <label htmlFor="photo">Upload Photo:</label>
    <input type="file" id="photo" name="photo" accept="image/*" />

    <button type="submit">Submit</button>
  </form>
</ModalContent>



        </Modal>
      </TableContainer>
    </Section>
  );
}

export default MyComponent;
