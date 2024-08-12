import { CustomButton, useFilterSidebarVeiwModel, useRouter, useSearchParams } from "../../imports";

export const FilterHeader = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const { filterList } = useFilterSidebarVeiwModel()
    const filterQuery = filterList.map(item => item.title.value)

    const removeFilter = (filtersName) => {
        const newFilters = { ...Object.fromEntries(searchParams.entries()) };
        filtersName?.map(item => delete newFilters[item])
        router.push(`?${new URLSearchParams(newFilters).toString()}`);
    };

    return (
        <div className='flex justify-between border-b border-gray-300 py-4'>
            <p>فیلترها</p>
            <CustomButton
                type='button'
                variant='text'
                onClick={() => removeFilter(filterQuery)}
            >
                <p className='text-blue-primary'>حذف فیلترها</p>
            </CustomButton>
        </div>
    )
}
