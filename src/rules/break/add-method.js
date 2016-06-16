
export default function addMethod({ kind, path, lhs, rhs }) {
  const match = kind === 'N'
              && path.length === 3
              && path[0] === 'paths'
              && ( path[2] === 'post' 
              || path[2] === 'delete'
              || path[2] === 'put' )

  if (match) {
    const pathId = path[1];
    const method = path[2];
    return `${pathId} (${method}) - New endpoint added`;
  }
  return false;
}

