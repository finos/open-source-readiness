import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import BokTagList from '../BokTagList';
import Bio from '../Bio';
import BoxOut from '../BoxOut'
import DocExcerpt from '../DocExcerpt'

export default {
  ...MDXComponents,
  BokTagList: BokTagList,
  Bio: Bio,
  BoxOut: BoxOut,
  DocExcerpt: DocExcerpt
};
