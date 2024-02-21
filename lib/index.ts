import type {Root} from 'mdast';
import remarkMediaCard from '@zhouhua-dev/remark-media-card';

const plugin = ({markdownAST}: {markdownAST: Root}) => {
  // Manipulate AST
  remarkMediaCard()(markdownAST);
  return markdownAST;
};

export = plugin;
