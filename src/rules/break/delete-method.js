export default function deleteMethod({ kind, path, lhs, rhs }) {
  const match = kind === 'D'
              && path.length === 3
              && path[0] === 'paths'
              && ( path[2] === 'post' 
              || path[2] === 'delete'
              || path[2] === 'put' )
  if (match) {
    const pathId = path[1];
    const method = path[2];
    return `${pathId} (${method}) - Endpoint removed`;
  }
  return false;
}


