# ddu-filter-sorter_reversed

Reversed sort for ddu.vim

## Required

### denops.vim

https://github.com/vim-denops/denops.vim

### ddu.vim

https://github.com/Shougo/ddu.vim

## Configuration

```vim
call ddu#custom#patch_global(#{
    \   sourceOptions: #{
    \     _: #{
    \       sorters: [
    \         'sorter_reversed',
    \       ],
    \     },
    \   }
    \ })
```
