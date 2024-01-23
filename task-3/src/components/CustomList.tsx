import CustomTable from './CustomTable';
import CustomTiles from './CustomTiles';

// eslint-disable-next-line react-refresh/only-export-components
export enum CustomListLayout {
  List = 'list',
  Tiles = 'tiles',
}

type CustomListProps<T> = {
  layout: CustomListLayout;
  data: T;
};

const CustomList = <T extends Record<string, string>[]>({
  layout,
  data,
}: CustomListProps<T>): JSX.Element => {
  switch (layout) {
    case CustomListLayout.List:
      return <CustomTable data={data} />;
    case CustomListLayout.Tiles:
      return <CustomTiles data={data} />;
  }
};

export default CustomList;
