import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import { SortVeiw } from './sort/veiw';
import { useSortVeiwModel } from './sort/veiwModel';
import { CustomSelect } from '@/components/elements/select/customSelect'
import { SearchResults } from './components/searchResults'
import { FilterSidebar } from '@/view/search/filterSidebar'
import { FilterSidebarVeiw } from './filterSidebar/veiw'
import { useFilterSidebarVeiwModel } from './filterSidebar/veiwModel'
import { FilterHeader } from '@/view/search/components/filter/filterHeader'
import { FilterItem } from '@/view/search/components/filter/filterItem'
import jsonData from '../../utile/data/flight-data.json'
import { useConvertTimeToPersion } from "@/hooks/useConvertTimeToPersion";
import { useFindAirline } from "@/hooks/useFindAirline";
import { CustomButton } from '@/components/elements/button/customButton'
import { CustomRadio } from '@/components/elements/radio/customRadio'
import { ArrowTopIcon } from '../../utile/icons/icon'
import { FlightDetailHeader } from './components/flightDetails/flightDetailHeader'
import { FlightTime } from './components/flightDetails/flightTime';
import { FlightDetailFeature } from './components/flightDetails/flightDetailFeature';
import { AirportNameAndCode } from '@/components/aitportNameAndCode'
import { useFindAirport } from '@/hooks/useFindAirport'
import { usePersionDate } from '@/hooks/usePersionDate'
import { useTime } from '@/hooks/useTime'
import moment from 'jalali-moment'
import { MinusIcon } from '@/utile/icons'
import { CustomTab } from '@/components/tab/customTab'
import { FlightDetailTab } from './components/flightDetails/flightDetailTab'
import { useWeekNameFa } from '@/hooks/useWeekNameFa'
import { Sort } from '@/view/search/sort'
import { SearchResultFeatureBox } from "./components/searchResults/searchResultFeatureBox"
import { SearchResultPricetInfo } from "./components/searchResults/searchResultPriceBox"
import { SearchResultTimeBox } from "./components/searchResults/searchResultTimeBox"
import { useNumberFormat } from "@/hooks/useNumberFormat"

export {
    jsonData,
    useEffect,
    useRouter,
    useSearchParams,
    useWeekNameFa,
    useConvertTimeToPersion,
    useFindAirline,
    useState,
    CustomButton,
    CustomSelect,
    SortVeiw,
    useSortVeiwModel,
    SearchResults,
    FilterSidebar,
    FilterSidebarVeiw,
    useFilterSidebarVeiwModel,
    FilterHeader,
    FilterItem,
    CustomRadio,
    ArrowTopIcon,
    FlightDetailHeader,
    FlightTime,
    FlightDetailFeature,
    useFindAirport,
    AirportNameAndCode,
    usePersionDate,
    useTime,
    moment,
    MinusIcon,
    CustomTab,
    FlightDetailTab,
    Sort,
    SearchResultFeatureBox,
    SearchResultPricetInfo,
    SearchResultTimeBox,
    useNumberFormat

}