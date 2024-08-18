import './MovieList.css';
const SearchBox =(props)=>{
    return(
        <div className="serch_box">
            <input  value={props.searchValue} 
            onChange={(event) =>props.setSearchValue(event.target.value)} 
            placeholder="type to search">
            </input>
            
        </div>
    );

}; 
export default SearchBox;