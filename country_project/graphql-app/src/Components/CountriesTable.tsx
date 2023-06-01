// MUI Imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableCell, tableCellClasses } from '@mui/material';
import { styled } from '@mui/material/styles';

// Components Input
import ThemaColorInput from './ThemaColorInput';
import FilterSearch from './FilterSearch';

// React Imports
import { useEffect, useState } from 'react';

// Css Imports
import '../Styles/CountriesTable.css'

const CountriesTable = (props: any) => {

  // UseStates
  const [themaColor, setThemaColor] = useState<string | undefined>('')
  const [searchInputValue, setSearchInputValue] = useState<string | undefined>('')
  const [endIndex, setEndIndex] = useState('10');
  const [selectedRow, setSelectedRow] = useState('9')

  // Data Filter
  const displayedData = props.data.slice(0, endIndex);
  const filterData = displayedData.filter((item: any) => item.name.toLowerCase().includes(searchInputValue?.toLowerCase()))


  // UseEffects
  useEffect(() => {
    if (Number(endIndex) < 10) {
      setSelectedRow((Number(endIndex) - 1).toString())
    }
    else {
      setSelectedRow('9')
    }
  }, [endIndex])

  useEffect(() => {
    if (filterData.length < 10) {
      setSelectedRow((Number(filterData.length) - 1).toString())
    }
    else {
      setSelectedRow('9')
    }
  }, [searchInputValue])

  //Functions

  const callbackColor = (colorValue: string | undefined) => {
    setThemaColor(colorValue)
  }


  const callbackSearchInput = (searchValue: string | undefined) => {
    setSearchInputValue(searchValue)
  }


  const selectedRowIndex = (rowIndex: any) => {
    setSelectedRow(rowIndex);
  }

  // StyleFunctions
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: themaColor == '' ? '#C57111' : themaColor,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },

  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },

    '&:last-child td, &:last-child th': {
      border: 0,
    },

  }));






  return (
    <>
      <header className='countriesTable_header'>
        <FilterSearch borderColor={themaColor} searchInputFunction={callbackSearchInput} />
        <input placeholder='Size' min={2} value={endIndex} onChange={(e) => setEndIndex(e.target.value)} className='sizeInput' style={{ border: `1px solid ${themaColor === '' ? '#C57111' : themaColor}` }} type='number' />
        <ThemaColorInput colorFunction={callbackColor} />
      </header>


      <Paper className='countriesTable_paper'>

        <TableContainer className='countriesTable_container'>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Code</StyledTableCell>
                <StyledTableCell align="right">Continent</StyledTableCell>
                <StyledTableCell align="right">Phone</StyledTableCell>
                <StyledTableCell align="right">Currency</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filterData.map((item: any, index: any) => {
                return (
                  <StyledTableRow style={{ backgroundColor: selectedRow != index ? 'white' : themaColor === '' ? '#C57111' : themaColor }} onClick={() => selectedRowIndex(index)} key={index}>
                    <StyledTableCell component="th" scope="row">
                      {index + 1} -  {item.name} ({item.emoji})
                    </StyledTableCell>
                    <StyledTableCell align="right">{item.code}</StyledTableCell>
                    <StyledTableCell align="right">{item.continent.name}</StyledTableCell>
                    <StyledTableCell align="right">{item.phone}</StyledTableCell>
                    <StyledTableCell align="right">{item.currency}</StyledTableCell>

                  </StyledTableRow>
                )
              })}
            </TableBody>

          </Table>
        </TableContainer>
      </Paper>

    </>


  )
}

export default CountriesTable;