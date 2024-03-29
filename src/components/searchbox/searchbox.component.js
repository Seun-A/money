import './searchbox.style.scss'

import search from '../../assets/icons/search.svg'

const SearchBox = ({ type }) => (
  <div className={`searchbox d-flex ${type}`}>
    <div className='search-container h-100 d-flex align-items-center justify-content-center'>
      <img src={search} alt='search' />
    </div>
    <input type='search' className='' placeholder='Search' />
  </div>
)

export default SearchBox;
