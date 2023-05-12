import { Stack } from '@mui/material'

import { categories } from '../utils/Constants'

const selectedCategory = 'New'

const Sidebar = () => (
  <Stack
    direction="row"
    sx={{
      overflowY: 'auto',
      height: { sx: 'auto', md: '90%' },
      flexDirection: { md: 'column' },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        style={{
          background: category.name === selectedCategory && '#272727',
          color: 'white',
          opacity: category.name === selectedCategory ? '1' : '0.8',
        }}
        key={category.name}
      >
        <span style={{ marginRight: '8%' }}>{category.icon}</span>
        <span
          style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
)

export default Sidebar
