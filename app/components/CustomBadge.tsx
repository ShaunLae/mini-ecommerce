import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useCartStore } from '../store/useCartStore';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function CustomBadge() {
  const { totalQuantity} = useCartStore((state) => state);
  return (
    <IconButton aria-label="view cart with 2 items">
      <ShoppingCartIcon sx={{color: "#fff"}} fontSize="small" />
      <CartBadge badgeContent={totalQuantity} color="warning" overlap="circular" />
    </IconButton>
  );
}
